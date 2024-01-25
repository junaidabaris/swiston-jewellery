import { useEffect, useState } from "react"
import { useGetGemstonQuery, useGetMaterialQuery, useGetMetalTypeQuery, useGetProductMutation, useGetProductTypeQuery, useGetRingsizeQuery, useGetThemesQuery, useGetshopforQuery } from "../../apiConfig/jwellerySlice"
import Cards from "../../components/category/Cards"
import CategoryFilter from "../../components/category/CategoryFilter"
import CategorySort from "../../components/category/CategorySort"
import PriceFilter from "../../components/category/PriceFilter"
import { filerCase, mockData } from "./mockData"
import MobileFilter from "../../components/category/MobleFilter"

function CategoryPage() {
    const { data } = useGetProductTypeQuery()
    const { data: material } = useGetMaterialQuery()
    const { data: metaltype } = useGetMetalTypeQuery()
    const { data: shopfors } = useGetshopforQuery()
    const { data: ringSize } = useGetRingsizeQuery(1)
    const { data: gemstone } = useGetGemstonQuery()
    const { data: theme } = useGetThemesQuery()
    const [productData, { isLoading, isError, isSuccess }] = useGetProductMutation()
    const [count, setCount] = useState(1)
    const [page, setPage] = useState(0)
    useEffect(() => {
        productData({ count: count, page: page })
    }, [])
    return <section className="p-5">
        <div className="d-flex">
            <CategoryFilter data={{
                prices: [],
                types: data,
                material: material,
                metalType: metaltype,
                shopfor: shopfors,
                ringsize: ringSize,
                gemstone: gemstone,
                themes: theme
            }} />
            <div className="wrapper_product">
                <CategorySort data={{ selectedCat: [], sortesValue: [] }} />
                <div className="w-100">
                    <div className="wrapper_card">
                        <div className="main-card">
                            <Cards data={mockData} />
                            <PriceFilter prices={filerCase} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
<MobileFilter/>
    </section>
}
export default CategoryPage