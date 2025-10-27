import { BookmarkCard } from './BookmarkCard';

interface Bookmark {
  id: number;
  title: string;
  url: string;
  description: string;
  iconType: 'checkout' | 'flights' | 'shop' | 'intranet';
}

interface BookmarkListProps {
  bookmarks: Bookmark[];
}

export function BookmarkList({ bookmarks }: BookmarkListProps) {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full">
      {bookmarks.map((bookmark) => (
        <BookmarkCard key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
}
