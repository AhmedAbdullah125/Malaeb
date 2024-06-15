import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

export default function Breadcrumb() {
    return (
        <section class="breadcrumb-sec">
            <div class="container">
                <ul class="breadcrumb">
                    <li class="breadcrumb-li">
                        <a href="index.html" class="breadcrumb-a"> الرئيسية /</a>
                    </li>
                    <li class="breadcrumb-li">
                        <a href="store.html" class="breadcrumb-a"> المتجر /</a>
                    </li>
                    <li class="breadcrumb-li">
                        <span> الاحذية </span>
                    </li>
                </ul>
            </div>
            {/* <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography> 
            </Breadcrumbs>
             */}
        </section>
    )
}
