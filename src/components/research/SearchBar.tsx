import styles from './ResearchLibrary.module.css';

export default function SearchBar({ query, setQuery }: { query: string; setQuery: (query: string) => void }) {
    return (
        <div>
            <label className={styles.search}>
                <span className={styles.visuallyHidden}>Search research articles</span>
                    <input
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.currentTarget.value)}
                        placeholder="Search titles, authors, or topics"
                    />
                <span aria-hidden="true">Search</span>
            </label>
        </div>
    )
}