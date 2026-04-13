import styles from './Recipe.module.scss';
import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

interface RecipeProps {
  title: string;
  image: string;
}

function Recipe({ title, image }: RecipeProps) {
    
    const [liked, setLiked] = useState(false);

    function handleClick() {
        setLiked(!liked);
    }

    return (
        <div onClick={handleClick} className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} />
            </div>

            <div className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}>
                <h3>{title}</h3>
                <HeartIcon className={`${styles.heart} mr-15 ${liked ? 'text-primary' : ''}`}  />
            </div>
        </div>
    );
}

export default Recipe;