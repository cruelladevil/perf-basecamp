import { GifImageModel } from '../../../../models/image/gifImage';

import ResultTitle from '../ResultTitle/ResultTitle';
import { MemoizedGifItem } from '../GifItem/GifItem';

import { SearchStatus, SEARCH_STATUS } from '../../hooks/useGifSearch';

import styles from './SearchResult.module.css';

type SearchResultProps = {
  status: SearchStatus;
  gifList: GifImageModel[];
  loadMore: () => void;
};

const SearchResult = ({ status, gifList, loadMore }: SearchResultProps) => {
  return (
    <section className={styles.searchResultSection}>
      <ResultTitle status={status} />
      {(status === SEARCH_STATUS.FOUND || status === SEARCH_STATUS.BEFORE_SEARCH) && (
        <div className={styles.gifResultWrapper}>
          {gifList.map((gif: GifImageModel) => (
            <MemoizedGifItem
              key={gif.id}
              title={gif.title}
              url={gif.url}
              imageUrl={gif.imageUrl}
              videoUrl={gif.videoUrl}
            />
          ))}
        </div>
      )}
      {status === SEARCH_STATUS.FOUND && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          load more
        </button>
      )}
    </section>
  );
};

export default SearchResult;
