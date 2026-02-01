import { useParams } from 'react-router-dom'

import { FeedPostItem, getFeedPostsByFeedId } from '@/components/FeedPostItem'
import { MessagePanel } from '@/components/MessagePanel'

export default function Feed() {
  const { feedId } = useParams<{ feedId: string }>()
  const feedPosts = feedId ? getFeedPostsByFeedId(feedId) : []

  const onSubmit = (data: { message: string }) => {
    // eslint-disable-next-line no-console -- placeholder until API wired
    console.log('submit', data)
  }

  return (
    <div className="flex flex-1 flex-col min-h-0 p-4">
      <div className="flex-1 overflow-auto min-h-0">
        <div className="flex flex-col gap-3">
          {feedPosts.map(post => (
            <FeedPostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
      <MessagePanel onSubmit={onSubmit} />
    </div>
  )
}
