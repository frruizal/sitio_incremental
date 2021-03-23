import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ListaArticulos from '../components/lista-articulos';
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticulosPage = () => (
    <Layout>
        <SEO title="Articulos" />
        <ListaArticulos></ListaArticulos>

    </Layout>
)

export default ArticulosPage
