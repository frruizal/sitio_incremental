//plantilla para nuestras publicaciones
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

/*Linea 15 como un if si es nulo que muestre vacio*/
export default ({ data }) => {
    const noticia = data.nodeNoticia;
    const myurl =data.sitePlugin.pluginOptions.baseUrl;
    return (
        <Layout>
            <noticia>
                <h1>  { noticia.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: noticia.body.value }}></div>
                {noticia.relationships.field_noticia_foto ? <img src={myurl + noticia.relationships.field_noticia_foto.uri.url} alt={noticia.field_noticia_foto.alt} height={noticia.field_noticia_foto.width}/> : ''}
            </noticia>
        </Layout>
    )
};

//consultamos solo por un nodo de articulo pasando una identificacion como argumento
//ahora podemos actualizar node js para usarlo al generar paginas

export const query = graphql`
  query($id: String!) {
      sitePlugin(name: {eq: "gatsby-source-drupal"}) {
        pluginOptions {
            baseUrl}
            }
      nodeNoticia(fields: { id: { eq: $id } }) {
      title
      field_noticia_foto {
         alt
        height 
        width
      }
      relationships {
      field_noticia_foto {
        uri{
          url 
          }
      }
    }
      body {
        value
      } 
    }
  }`