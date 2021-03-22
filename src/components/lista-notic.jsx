import React from 'react';
import { graphql, StaticQuery, Link} from 'gatsby';

import moment from 'moment';

//Aqui se va a mostrar la lista de todos los articulos disponibles
const PaginaArticulos =({data}) => (
    <StaticQuery
        query={graphql`
      query {
        allNodeNoticia(sort: {fields: [created],order: DESC}) {
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
            const noticialist= data.allNodeNoticia.edges.map(notice =>(
            <div>
                <h2 > {notice.node.title}</h2>
                <div align="right"><Link to={notice.node.path.alias} >Read more</Link></div>
                <div dangerouslySetInnerHTML={{ __html: notice.node.body.value }}></div>

                <hr></hr>
            </div>

        )
        );
            return <section >{noticialist}</section>;
        }}
    />)

export default PaginaArticulos