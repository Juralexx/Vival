import React from 'react'
import styled from 'styled-components'

const Embed = (props) => {
    const { embed } = props

    return (
        <EmbedContainer>
            <div dangerouslySetInnerHTML={{ __html : embed.embed }} />
        </EmbedContainer>
    )
}

export default Embed

const EmbedContainer = styled.div`
    padding : 40px 0;

    iframe {
        margin    : 10px auto;
        max-width : 100%;
    }
`