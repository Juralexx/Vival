import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import Layout from 'layouts/Layout';
import Actuality from 'layouts/Actuality';
import LazyImage from 'components/tools/LazyImage';
import { StyledButton } from 'components/tools/Buttons';
import { Button, Input, Select, IconButton, Breadcrumb, MiddlePagination } from 'components/global';
import Icon from 'components/icons/Icon';
import useGrid from 'functions/useGrid';
import { fetchSiteDatas, getImages } from 'api/site';
import { getActualities } from 'api/actuality';
import { dateParser, divideArrayIntoSizedParts, escapeRegexp, fetcher, highlightSearchResults, isHTML, removeAccents, shuffleArray, sortByOld, sortByRecent, timeBetween } from 'functions/utils';

export async function getStaticProps() {
    //Fetch site datas : denomination, openings, phone, address...
    const { siteDatas } = await fetchSiteDatas();
    //Fetch actualities
    const { actualities } = await getActualities();
    //Fetch all images from the 'brands' folder
    const { files: brands } = await getImages({ folder: 'img/brands' });
    //Fetch all images from the 'partners' folder
    const { files: partners } = await getImages({ folder: 'img/partners' });

    return {
        props: {
            datas: siteDatas,
            actualities,
            brands,
            partners
        },
    };
}

const getContentToDisplay = (actu) => {
    if (actu.content) {
        return actu.content;
    } else {
        if (actu.components.length > 0) {
            const el = actu.components.find(el => el.content);
            return el.content ? el.content : "";
        }
    }
}

export default function Actualities({ datas, actualities, router, brands, partners }) {
    //Keep site datas up-to-date
    const { data: siteDatas } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas });
    //Keep actualities up-to-date
    const { data } = useSWR(`${process.env.ACTUALITIES_API_ROUTE}`, fetcher, { initialData: actualities });
    const title = 'Nos actualités';

    const { grid, setGrid } = useGrid('actuDisplay', false)

    const [actus, setActus] = React.useState(null)
    React.useEffect(() => {
        if (!actus && data) {
            const sorted = data.data.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
            const pagination = divideArrayIntoSizedParts(sorted, 15)
            setActus({ all: sorted, paginated: pagination, filtered: pagination })
        }
    }, [actus, data])

    const { p } = router.query;
    const currentPage = Number(p) || 1;

    React.useEffect(() => {
        if (currentPage > actus?.filtered.length + 1)
            router.push(`${window.location.origin}/actualites`)
    }, [currentPage, actus?.filtered])

    /**
     *
     */

    const [search, setSearch] = React.useState({
        isSearching: false,
        isSearchActive: false,
        query: "",
        results: [],
        filters: { date: null, dateView: '', filter: null, filterView: '' }
    })

    const launchSearch = (array) => {
        const filters = search.filters
        let results = []
        // Aucune date ni aucun filtre n'est activé
        if (!filters.date && !filters.filter) {
            setActus(datas => ({ ...datas, filtered: divideArrayIntoSizedParts(array, 15) }))
        }
        // Une date est activée mais aucun filtre n'est selectionné
        else if (filters.date && !filters.filter) {
            results = timeBetween(array, filters.date)
            setActus(datas => ({ ...datas, filtered: divideArrayIntoSizedParts(results, 15) }))
        }
        // Aucune date n'est séléctionnée mais un filtre est activé
        else if (!filters.date && filters.filter) {
            if (filters.filter === 'recent') {
                results = sortByRecent(array, 'date')
                setActus(datas => ({ ...datas, filtered: divideArrayIntoSizedParts(results, 15) }))
            }
            if (filters.filter === 'old') {
                results = sortByOld(array, 'date')
                setActus(datas => ({ ...datas, filtered: divideArrayIntoSizedParts(results, 15) }))
            }
            if (filters.filter === 'random') {
                results = shuffleArray(array)
                setActus(datas => ({ ...datas, filtered: divideArrayIntoSizedParts(results, 15) }))
            }
        }
        //Une date est selectionnée et un filtre est selectionné
        else if (filters.date && filters.filter) {
            let dateSorted = timeBetween(array, filters.date)
            if (filters.filter === 'recent') {
                results = sortByRecent(dateSorted, 'date')
                setActus(datas => ({ ...datas, filtered: divideArrayIntoSizedParts(results, 15) }))
            }
            if (filters.filter === 'old') {
                results = sortByOld(dateSorted, 'date')
                setActus(datas => ({ ...datas, filtered: divideArrayIntoSizedParts(results, 15) }))
            }
            if (filters.filter === 'random') {
                results = shuffleArray(dateSorted)
                setActus(datas => ({ ...datas, filtered: divideArrayIntoSizedParts(results, 15) }))
            }
        }
    }

    React.useEffect(() => {
        const filters = search.filters
        const regexp = new RegExp(escapeRegexp(removeAccents(search.query)), 'i')

        if (search.isSearchActive && search.query.length < 3 && filters.date === '' && filters.filter === '')
            setSearch(data => ({ ...data, isSearchActive: false }))

        if (isHTML(search.query)) { return };

        if (search.isSearching) {
            if (router.query['p']) {
                router.push(`${window.location.origin}/actualites`)
            }
            setSearch(data => ({ ...data, isSearchActive: true }))

            if (search.query.length >= 3) {
                // Si la recherche est lancée
                let response = actus.all.filter(actu => regexp.test(removeAccents(actu.title)))
                setSearch(data => ({ ...data, results: response }))
                launchSearch(response)
            } else if (search.query.length < 3) {
                // Si la recherche n'est pas lancée
                setSearch(data => ({ ...data, isSearching: false }))
                launchSearch(actus.all)
            }
            highlightSearchResults(search.query, 'title-link')
            setSearch(datas => ({ ...datas, isSearching: false }))
        }
    }, [actus, search, router])

    return (
        actus && siteDatas && (
            <Layout datas={siteDatas} title={title}>
                <Actuality datas={siteDatas} brands={brands} partners={partners}>
                    <div className='container-lg pt-4 pb-14'>
                        <Breadcrumb
                            denomination={siteDatas.denomination}
                        />
                        <h1 className='mb-14'>{title}</h1>
                        <div className='flex xs:flex-col xs:items-end justify-end gap-1 z-[1000]'>
                            <Input
                                className="xs:w-full w-80"
                                placeholder='Rechercher...'
                                icon={<Icon name="Search" />}
                                value={search.query}
                                onChange={e => setSearch(data => ({ ...data, isSearching: true, query: e.target.value }))}
                                onClean={() => setSearch(data => ({ ...data, isSearching: true, query: '' }))}
                            />
                            <div className='flex gap-1 xs:w-full xs:justify-between'>
                                <Select
                                    className="max-w-[160px] xs:max-w-full"
                                    placeholder="Période"
                                    readOnly
                                    value={search.filters.dateView}
                                    onChange={() => { }}
                                    icon={<Icon name="Calendar" />}
                                    onClean={() => setSearch(datas => ({ ...datas, isSearching: true, filters: { ...datas.filters, date: null, dateView: '' } }))}
                                >
                                    <div onClick={() => setSearch(datas => ({ ...datas, isSearching: true, filters: { ...datas.filters, date: 7, dateView: 'Cette semaine' } }))}>
                                        Cette semaine
                                    </div>
                                    <div onClick={() => setSearch(datas => ({ ...datas, isSearching: true, filters: { ...datas.filters, date: 31, dateView: 'Ce mois-ci' } }))}>
                                        Ce mois-ci
                                    </div>
                                    <div onClick={() => setSearch(datas => ({ ...datas, isSearching: true, filters: { ...datas.filters, date: 365, dateView: 'Cette année' } }))}>
                                        Cette année
                                    </div>
                                </Select>
                                <Select
                                    className="max-w-[160px] xs:max-w-full"
                                    placeholder="Filtrer"
                                    readOnly
                                    value={search.filters.filterView}
                                    onChange={() => { }}
                                    icon={<Icon name="Filter" />}
                                    onClean={() => setSearch(datas => ({ ...datas, isSearching: true, filters: { ...datas.filters, filter: null, filterView: '' } }))}
                                >
                                    <div onClick={() => setSearch(datas => ({ ...datas, isSearching: true, filters: { ...datas.filters, filter: 'recent', filterView: 'Les plus récents' } }))}>
                                        Les plus récents
                                    </div>
                                    <div onClick={() => setSearch(datas => ({ ...datas, isSearching: true, filters: { ...datas.filters, filter: 'old', filterView: 'Les plus anciens' } }))}>
                                        Les plus anciens
                                    </div>
                                    <div onClick={() => setSearch(datas => ({ ...datas, isSearching: true, filters: { ...datas.filters, filter: 'random', filterView: 'Aléatoire' } }))}>
                                        Aléatoire
                                    </div>
                                </Select>
                                <IconButton className="v-text" onClick={() => setGrid(!grid)}>
                                    {!grid ? <Icon name="Grid" /> : <Icon name="LayoutHorizontal" />}
                                </IconButton>
                            </div>
                        </div>
                        <div className={`av-actualities __${grid ? 'grid' : 'row'}`}>
                            {search.isSearchActive && (search.query.length > 2 || search.filters.date || search.filters.filter) && actus.filtered.length === 0 &&
                                <div className="no-results-big">
                                    <Icon name="Search" />
                                    <span>Aucun résultat</span> ne correspond à votre recherche
                                    <Button className="v-primary" onClick={() => setSearch(datas => ({ ...datas, isSearching: true, query: '', filters: { date: null, dateView: '', filter: null, filterView: '' } }))}>
                                        Réinitialiser ma recherche
                                    </Button>
                                </div>
                            }
                            {actus?.filtered && (
                                actus?.filtered.length > 0 && (
                                    actus?.filtered[currentPage - 1].map((actu, key) => {
                                        const { title, date, content, url, image } = actu;
                                        return (
                                            <div className='__card' key={key}>
                                                <div className="image">
                                                    <LazyImage
                                                        src={image.url ? `${process.env.SERVER_URL}${image.url}` : '/img/actualites-default.jpg'}
                                                        alt={image.alternativeText || actu.title}
                                                        title={image.alternativeText || actu.title}
                                                        blurHash={image.blurhash}
                                                    />
                                                </div>
                                                <div className="text">
                                                    <h2>
                                                        <Link className='title-link' href={`/actualites/${url}`} passHref>
                                                            {title}
                                                        </Link>
                                                    </h2>
                                                    <div className="date">{dateParser(date)}</div>
                                                    <div
                                                        className='content'
                                                        dangerouslySetInnerHTML={{ __html: getContentToDisplay(actu) }}
                                                    />
                                                    <StyledButton href={`/actualites/${url}`} className="is-link">
                                                        Lire la suite
                                                    </StyledButton>
                                                </div>
                                            </div>
                                        )
                                    })
                                ))}
                        </div>
                        <MiddlePagination
                            array={actus?.filtered || []}
                            baseRoute='/actualites'
                            currentPage={currentPage}
                            count={actus.filtered.length}
                            limit={25}
                        />
                    </div>
                </Actuality>
            </Layout>
        )
    )
}