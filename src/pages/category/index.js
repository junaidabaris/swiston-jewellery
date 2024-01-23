import { useGetProductTypeQuery } from "../../apiConfig/jwellerySlice"
import Cards from "../../components/category/Cards"
import CategoryFilter from "../../components/category/CategoryFilter"
import CategorySort from "../../components/category/CategorySort"
import PriceFilter from "../../components/category/PriceFilter"
import { filerCase, mockData } from "./mockData"

function CategoryPage() {
    const { data } = useGetProductTypeQuery()
    return <section className="p-5">
        <div className="d-flex">
            <CategoryFilter data={{ prices: [], types: [] }} />
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

    </section>
}
export default CategoryPage