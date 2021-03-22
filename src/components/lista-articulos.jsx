import React from 'react';
import { graphql, StaticQuery, Link} from 'gatsby';

import moment from 'moment';

//Aqui se va a mostrar la lista de todos los articulos disponibles
const PaginaArticulos =({data}) => (
    <StaticQuery
        query={graphql`
      query {
        allNodeArticle(sort: {fields: [created],order: DESC}) {
            edges {
                node {  
                    title
                    path {
                        alias
                    }
                    body {
                        value
                    }
                }
            }
        }
        }
    `}
        render={ data => {
            const artlist= data.allNodeArticle.edges.map(post =>(
            <div>
                <h2 > {post.node.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.node.body.value }}></div>
                <div align="right"><Link to={post.node.path.alias} >Read more</Link></div>
                <hr></hr>
            </div>

        )
        );
            return <section >{artlist}</section>;
        }}
    />)

export default PaginaArticulos