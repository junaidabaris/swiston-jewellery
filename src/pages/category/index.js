import { useEffect, useState } from "react"
import { useGetAlphabeticQuery, useGetGemstonQuery, useGetJwellLengthQuery, useGetMaterialQuery, useGetMetalTypeQuery, useGetProductMutation, useGetProductTypeQuery, useGetRingsizeQuery, useGetThemesQuery, useGetcuratebyQuery, useGetshopforQuery } from "../../apiConfig/jwellerySlice"
import Cards from "../../components/category/Cards"
import CategoryFilter from "../../components/category/CategoryFilter"
import CategorySort from "../../components/category/CategorySort"
import PriceFilter from "../../components/category/PriceFilter"
import { filerCase, mockData } from "./mockData"
import MobileFilter from "../../components/category/MobleFilter"
import NavCat from "../../components/category/Nav"

function CategoryPage() {
    const { data } = useGetProductTypeQuery()
    const { data: material } = useGetMaterialQuery()
    const { data: metaltype } = useGetMetalTypeQuery()
    const { data: shopfors } = useGetshopforQuery()
    const { data: ringSize } = useGetRingsizeQuery(1)
    const { data: gemstone } = useGetGemstonQuery()
    const { data: theme } = useGetThemesQuery()
    const { data: lengthJwell } = useGetJwellLengthQuery()
    const { data: curatedBy } = useGetcuratebyQuery()
    const { data: alfalist } = useGetAlphabeticQuery()
    const [productData, { isLoading, isError, isSuccess }] = useGetProductMutation()
    const [count, setCount] = useState(1)
    const [page, setPage] = useState(0)
    useEffect(() => {
        productData({ count: count, page: page })
    }, [])
    return <section className="">
          <div className="main_nav"><NavCat /></div>
        <div className="d-flex p-5">
            <CategoryFilter data={{
                prices: [],
                types: data,
                material: material,
                metalType: metaltype,
                shopfor: shopfors,
                ringsize: ringSize,
                gemstone: gemstone,
                lengthJwell: lengthJwell,
                curatedBy: curatedBy,
                alfalist: alfalist,
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