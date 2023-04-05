import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from 'layouts/Layout'
import Actuality from 'layouts/Actuality'
import LazyImage from 'components/tools/LazyImage'
import NextBreadcrumbs from 'tools/Breadcrumb'
import Icon from 'components/tools/icons/Icon'
import { DropdownInput, IconInput } from 'components/tools/Inputs'
import { Button, LinkStyledButton } from 'components/tools/Buttons'
import Pagination from 'components/tools/Pagination'
import useGrid from 'functions/useGrid'
import { fetchSiteDatas, getImages } from 'api/site'
import { getActualities } from 'api/actuality'
import { dateParser, divideArrayIntoSizedParts, escapeRegexp, fetcher, highlightSearchResults, isHTML, multiplyArray, removeAccents, shuffleArray, sortByOld, sortByRecent, timeBetween } from 'functions/utils'

const getContentToDisplay = (actu) => {
    if (actu.content) {
        return actu.content
    } else {
        if (actu.components.length > 0) {
            const el = actu.components.find(el => el.content)
            return el.content ? el.content : ""
        }
    }
}

export default function Actualities({ datas, actualities, router, brands, partners }) {
    const { data: siteDatas } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas })
    const { data } = useSWR(`${process.env.ACTUALITIES_API_ROUTE}`, fetcher, { initialData: actualities })
    const title = 'Nos actualités'

    const { grid, setGrid } = useGrid('actuDisplay', false)

    const [actus, setActus] = React.useState(null)
    React.useEffect(() => {
        if (!actus && data) {
            const sorted = data.data.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
            const pagination = divideArrayIntoSizedParts(sorted, 20, 15)
            setActus({ all: sorted, paginated: pagination, filtered: pagination })
        }
    }, [actus, data])

    const { p } = router.query
    const currentPage = Number(p) || 1

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

    /**
     * 
     */

    return (
        actus && siteDatas &&
        <Layout
            datas={siteDatas}
            title={title}
        >
            <Actuality
                datas={siteDatas}
                brands={brands}
                partners={partners}
            >
                <ActualitiesPage className='container-lg'>
                    <NextBreadcrumbs
                        denomination={siteDatas.denomination}
                    />
                    <h1>{title}</h1>
                    <div className='search-tools'>
                        <IconInput
                            className="is_start_icon is_end_icon"
                            placeholder='Rechercher...'
                            icon={<Icon name="Search" />}
                            value={search.query}
                            onChange={e => setSearch(data => ({ ...data, isSearching: true, query: e.target.value }))}
                            cross
                            onClean={() => setSearch(data => ({ ...data, isSearching: true, query: '' }))}
                        />
                        <div className='search-tools-filters'>
                            <DropdownInput
                                placeholder="Période"
                                value={search.filters.dateView}
                                onChange={(e) => { }}
                                className="is_start_icon"
                                icon={<Icon name="Calendar" />}
                                cross
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
                            </DropdownInput>
                            <DropdownInput
                                placeholder="Filtrer"
                                value={search.filters.filterView}
                                onChange={(e) => { }}
                                className="is_start_icon"
                                icon={<Icon name="Filter" />}
                                cross
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
                            </DropdownInput>
                            <div className='tool-btn' onClick={() => setGrid(!grid)}>
                                {!grid ? <Icon name="Grid" /> : <Icon name="Row" />}
                            </div>
                        </div>
                    </div>
                    <ActualitiesContainer className={`__${grid ? 'grid' : 'row'}`}>
                        {search.isSearchActive && (search.query.length > 2 || search.filters.date || search.filters.filter) && actus.filtered.length === 0 &&
                            <div className="no-results-big">
                                <Icon name="Search" />
                                <span>Aucun résultat</span> ne correspond à votre recherche
                                <Button onClick={() => setSearch(datas => ({ ...datas, isSearching: true, query: '', filters: { date: null, dateView: '', filter: null, filterView: '' } }))}>
                                    Réinitialiser ma recherche
                                </Button>
                            </div>
                        }
                        {actus?.filtered && (
                            actus?.filtered.length > 0 && (
                                actus?.filtered[currentPage - 1].map((actu, key) => {
                                    const { title, date, content, url, image } = actu
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
                                                <LinkStyledButton href={`/actualites/${url}`}>
                                                    Lire la suite
                                                </LinkStyledButton>
                                            </div>
                                        </div>
                                    )
                                })
                            ))}
                    </ActualitiesContainer>
                    <Pagination
                        array={actus?.filtered}
                        baseRoute='/actualites'
                        currentPage={currentPage}
                    />
                </ActualitiesPage>
            </Actuality>
        </Layout>
    )
}

export async function getStaticProps() {
    const { siteDatas } = await fetchSiteDatas()
    const { actualities } = await getActualities()
    const { files: brands } = await getImages({ folder: 'img/brands' })
    const { files: partners } = await getImages({ folder: 'img/partners' })

    return {
        props: {
            datas: siteDatas,
            actualities: actualities,
            brands: brands,
            partners: partners
        },
    };
}

const ActualitiesPage = styled.div`
    padding-top    : 15px;
    padding-bottom : 50px;

    h1 {
        margin-bottom : 50px;
    }

    .search-tools {
        display         : flex;
        justify-content : flex-end;
        z-index         : 1000;

        .search-tools-filters {
            display : flex;
        }

        .icon-input {
            box-shadow    : var(--shadow-xtiny);
            border-radius : var(--rounded-md);
            input {
                font-size : 14px;
            }
        }
        .dropdown-input {
            height        : 40px;
            margin-left   : 5px;
            width         : 155px;
            box-shadow    : var(--shadow-xtiny);
            border-radius : var(--rounded-md);
            input,
            .dropdown-input-choices {
                font-size : 14px;
            }
            svg {
                width  : 16px;
                height : 16px;
            }
        }
        .tool-btn {
            padding       : 4px;
            height        : 38px;
            width         : 38px;
            margin-left   : 5px;
            color         : var(--placeholder);
            box-shadow    : var(--shadow-tiny);
            border-radius : var(--rounded-md);
            cursor        : pointer;

            svg {
                width  : 30px;
                height : 30px;
            }

            &:hover {
                color            : var(--primary);
                background-color : rgba(var(--primary-rgb), 0.1);
            }
        }

        @media(max-width: 576px) {
            flex-direction : column;
            align-items    : flex-end;
            .search-tools-filters {
                width           : 100%;
                justify-content : space-between;
            }
            .icon-input {
                max-width     : 100%;
                margin-bottom : 7px;
            }
            .dropdown-input {
                width  : 100%;
                margin : 0;

                &:nth-child(1) {
                    margin-right : 5px;
                }
            }
        }
    }
`

const ActualitiesContainer = styled.div`
    padding : 50px 0;

    h2 {
        font-weight : 600;
        font-size   : 27px;
    }

    &.__row {
        .__card {
            display : grid;
            width   : 100%;
            padding : 20px 10px;

            .image {
                position      : relative;
                height        : 240px;
                border-radius : var(--rounded-md);
                overflow      : hidden;

                img {
                    width      : 100%;
                    height     : 100%;
                    object-fit : cover;
                }
            }

            .date {
                color     : var(--text-light);
                font-size : 14px;
            }

            .text {
                display         : flex;
                flex-direction  : column;
                justify-content : center;
                align-items     : flex-start;

                .content {
                    margin-bottom : 20px;
                    text-align    : justify;
                    /* max-width     : 650px; */

                    iframe {
                        display : none;
                    }

                    *:not(p, span, a, strong, b, u) {
                        display : none;
                    }
                }
            }

            &:nth-child(even) {
                grid-template-columns : 2fr 1fr;
                
                .image {
                    order : 2;
                }

                .text {
                    order         : 1;
                    padding-right : 30px;

                    @media(min-width: 769px) {
                        align-items : flex-end;
                    }

                    .content {
                        margin-left : auto;
                    }
                }

                @media(max-width: 768px) {
                    grid-template-columns : 1fr;
                    .text {
                        order : 2;
                    }

                    .image {
                        order : 1;
                    }
                }
            }

            &:nth-child(odd) {
                grid-template-columns : 1fr 2fr;

                @media(max-width: 768px) {
                    grid-template-columns : 1fr;
                }

                h2 {
                    text-align : left;
                }

                .text {
                    text-align   : left;
                    padding-left : 30px;
                }
            }

            @media(max-width: 768px) {
                .text {
                    padding : 40px 0;
                }
            }
        }

        .content {
            margin             : 20px 0 30px;
            text-align         : justify;
            text-overflow      : ellipsis;
            overflow           : hidden;
            width              : 100%;
            line-height        : 1.5rem;
            display            : -webkit-box;
            -webkit-line-clamp : 3;
            -webkit-box-orient : vertical;
        }

        @media(max-width: 992px) {
            padding : 50px 0;
        }

        @media(max-width: 768px) {
            .__card {
                padding : 10px 0;

                &:nth-child(even),
                &:nth-child(odd) {
                    .text {
                        padding    : 20px 0;
                        margin     : 0;
                    }
                }

                &:nth-child(even) {
                    .actu-img {
                        order : 1;
                    }

                    .actu-txt {
                        order : 2;
                    }
                }
            }
        }
    }

    /**
    *
    */

    &.__grid {
        display               : grid;
        grid-gap              : 20px;
        grid-template-columns : 1fr 1fr 1fr;

        @media(max-width: 992px) {
            grid-template-columns : 1fr 1fr;
        }
        @media(max-width: 576px) {
            grid-template-columns : 1fr;
        }

        .__card {
            height        : 100%;
            width         : 100%;
            max-width     : 560px;
            border        : 1px solid var(--light-border);
            border-radius : var(--rounded-md);
            box-shadow    : var(--shadow-x-smooth);
            overflow      : hidden;

            .image {
                position : relative;
                height   : 200px;
                width    : 100%;
                overflow : hidden;

                img {
                    min-width  : 100%;
                    min-height : 100%;
                    object-fit : cover;
                }
            }

            .text {
                position       : relative;
                padding        : 20px;
                padding-bottom : 65px;
                height         : calc(100% - 200px);

                h2 {
                    font-size   : 22px;
                    line-height : 26px;
                    font-weight : 600;
                }

                .date {
                    color : var(--text-light);
                }

                .content {
                    text-overflow      : ellipsis;
                    overflow           : hidden;
                    width              : 100%;
                    line-height        : 1.4rem;
                    display            : -webkit-box;
                    -webkit-line-clamp : 4;
                    -webkit-box-orient : vertical;
                    margin             : 10px 0 20px;

                    *:not(p, span, a, strong, b, u) {
                        display : none;
                    }
                }
            }

            button {
                position  : absolute;
                bottom    : 20px;
                right     : 20px;
            }

            @media(max-width: 992px) {
                position : relative;
                bottom   : 0;
            }
        }
    }
`