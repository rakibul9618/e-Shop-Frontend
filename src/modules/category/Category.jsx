import Container from '@/components/layouts/Container';
import CategoryCart from '@/components/shared/CategoryCart';
import Image from 'next/image';
import Link from 'next/link';


const categoryList = [
    {
        "id": 1,
        "title": "Computer",
        "image": "/images/category/category1.png",
        "href": "/"
    },
    {
        "id": 2,
        "title": "phones",
        "image": "/images/category/category2.png",
        "href": "/"
    },
    {
        "id": 3,
        "title": "watch",
        "image": "/images/category/category3.png",
        "href": "/"
    },
    {
        "id": 4,
        "title": "tv & audio",
        "image": "/images/category/category4.png",
        "href": "/"
    },
    {
        "id": 5,
        "title": "cameras",
        "image": "/images/category/category5.png",
        "href": "/"
    },
    {
        "id": 6,
        "title": "games",
        "image": "/images/category/category6.png",
        "href": "/"
    },
]

const Category = () => {
    return (
        <Container>
            <h3 className='lg_title'>popular Category</h3>
            <div className="grid col-2 col-sm-3 col-md-4 col-xl-6 gap-20 mt-8 category_list">
                {categoryList.map((item, ind) => (
                    <CategoryCart items={item} key={ind} />
                ))}
            </div>
        </Container>
    )
}

export default Category