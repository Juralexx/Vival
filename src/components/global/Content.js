import React from 'react'
import styled from 'styled-components'

const Content = (props) => {
    const { content } = props

    return (
        <ContentContainer>
            {content.title &&
                <h2>{content.title}</h2>
            }
            <div
                className="ck-content"
                dangerouslySetInnerHTML={{ __html: content.content }}
            />
        </ContentContainer>
    )
}

export default Content

const ContentContainer = styled.div`
    padding  : 40px 0;
    overflow : hidden;

    h2 {
        &:first-child {
            margin-bottom : 30px;
        }
    }
`