import React from "react"

import { Link } from "react-router-dom"

import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap"

import MyLastProject from "../components/sections/MyLastProject.jsx"

import Tecnologias from "../old/components/Sections/Tecnologias"
import MiExperiencia from "../old/components/Sections/MiExperiencia"

import SectionContacto from "../old/components/Sections/SectionContacto.jsx"

import LanguajesTable from "../old/components/otros/LanguajesTable.js"

const MyCv = () => {
	return (
		<>
			<Container className="mt-5 pt-5">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/">Home Page</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>My CV</BreadcrumbItem>
				</Breadcrumb>
			</Container>

			<img alt="..." className="path" src={require("../assets/img/path1.png")} />

			<section className="section-lg section mb-5">
				<MyLastProject alt={true} />
			</section>

			<MiExperiencia />

			<img alt="..." className="path" src={require("../assets/img/path4.png")} />

			<Tecnologias />

			<img
				alt="..."
				className="path"
				style={{ zIndex: "-1", marginTop: "-50vw" }}
				src={require("../assets/img/path2.png")}
			/>

			<LanguajesTable />

			<SectionContacto />
		</>
	)
}

export default MyCv
