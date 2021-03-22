//plantilla para nuestras publicaciones
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


export default ({ data }) => {
    const post = data.nodeArticle;

    return (
        <Layout>
            <article>
                <h1>  { post.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
            </article>
        </Layout>
    )
};

//consultamos solo por un nodo de articulo pasando una identificacion como argumento
//ahora podemos actualizar node js para usarlo al generar paginas

export const query = graphql`
  query($id: String!) {
      nodeArticle(fields: { id: { eq: $id } }) {
      title
      body {
        value
      } 
    }
  }`