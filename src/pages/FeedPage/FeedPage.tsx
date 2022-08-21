import { FC } from "react"
import stylesFeedPage from './FeedPage.module.css';

export const FeedPage: FC<{}> = () => {
    return (
        <div className={stylesFeedPage.feed}>
            <h1>Feed Page</h1>
        </div>
    )
}