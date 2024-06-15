import React from 'react'
import FilterCont from './FilterCont'
import FilterItems from './FilterItems'

export default function FilterContent() {
    return (
        <section class="content-section single-content">
            <div class="container">
                <div class="filter-grid">
                    <FilterCont></FilterCont>
                    <FilterItems></FilterItems>
                </div>
            </div>
        </section>
    )
}
