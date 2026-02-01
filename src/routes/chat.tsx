import { useParams } from 'react-router-dom'

import { FeedPostItem, getFeedPostsByFeedId } from '@/components/FeedPostItem'
import { MessagePanel } from '@/components/MessagePanel'

export default function Chat() {
  const { feedId } = useParams<{ feedId?: string }>()

  const onSubmit = (data: { message: string }) => {
    // eslint-disable-next-line no-console -- placeholder until API wired
    console.log('submit', data)
  }

  const feedPosts = feedId ? getFeedPostsByFeedId(feedId) : []

  return (
    <div className="flex flex-1 flex-col min-h-0 p-4">
      <div className="flex-1 overflow-auto min-h-0">
        {feedId ? (
          <div className="flex flex-col gap-3">
            {feedPosts.map(post => (
              <FeedPostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted">Messages</p>
        )}
      </div>
      <MessagePanel onSubmit={onSubmit} />
    </div>
  )
}
