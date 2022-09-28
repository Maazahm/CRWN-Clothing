import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss';

const Directory = ({ categories }) => (
    <div className="directory-container">
        {categories.map(({ id, imageUrl, title }) => (
            <CategoryItem
                key={id}
                imageUrl={imageUrl}
                title={title}
            />
        ))}
    </div>
);

export default Directory;