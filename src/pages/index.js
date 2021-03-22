import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ListaArticulos from '../components/lista-articulos';
import ListaNoticias from '../components/lista-notic';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <ListaNoticias></ListaNoticias>
    <ListaArticulos></ListaArticulos>

  </Layout>
)

export default IndexPage
