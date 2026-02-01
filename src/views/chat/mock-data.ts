import { Message } from './types'

export const mockMessages: Message[] = [
  {
    id: '1',
    sender: 'timur',
    timestamp: '12:41',
    content:
      'Hey team, just pushed the new terminal UI design. What do you think?',
    reactions: [
      { emoji: '👍', count: 3 },
      { emoji: '👎', count: 1 },
    ],
    replyCount: 5,
  },
  {
    id: '2',
    sender: 'alex',
    timestamp: '12:38',
    content: 'The keyboard shortcuts are working perfectly now',
    reactions: [{ emoji: '✅', count: 2 }],
  },
  {
    id: '3',
    sender: 'sarah',
    timestamp: '12:35',
    content: 'Can we review the search implementation today?',
    forwardedMessage: {
      from: 'dev',
      originalSender: 'timur',
      timestamp: '12:10',
      content: 'textsdfsdasdfasdfasdf',
    },
    replyCount: 2,
  },
  {
    id: '4',
    sender: 'mike',
    timestamp: '12:30',
    content: 'Here are the updated specs',
    attachment: {
      name: 'report.pdf',
      size: '2.3MB',
    },
    reactions: [{ emoji: '🔗', count: 1 }],
  },
  {
    id: '5',
    sender: 'timur',
    timestamp: '12:15',
    content: 'Remember to update your status before leaving',
  },

  {
    id: '1',
    sender: 'timur',
    timestamp: '12:41',
    content:
      'Hey team, just pushed the new terminal UI design. What do you think?',
    reactions: [
      { emoji: '👍', count: 3 },
      { emoji: '👎', count: 1 },
    ],
    replyCount: 5,
  },
  {
    id: '2',
    sender: 'alex',
    timestamp: '12:38',
    content: 'The keyboard shortcuts are working perfectly now',
    reactions: [{ emoji: '✅', count: 2 }],
  },
  {
    id: '3',
    sender: 'sarah',
    timestamp: '12:35',
    content: 'Can we review the search implementation today?',
    forwardedMessage: {
      from: 'dev',
      originalSender: 'timur',
      timestamp: '12:10',
      content: 'textsdfsdasdfasdfasdf',
    },
    replyCount: 2,
  },
  {
    id: '4',
    sender: 'mike',
    timestamp: '12:30',
    content: 'Here are the updated specs',
    attachment: {
      name: 'report.pdf',
      size: '2.3MB',
    },
    reactions: [{ emoji: '🔗', count: 1 }],
  },
  {
    id: '5',
    sender: 'timur',
    timestamp: '12:15',
    content: 'Remember to update your status before leaving',
  },

  {
    id: '1',
    sender: 'timur',
    timestamp: '12:41',
    content:
      'Hey team, just pushed the new terminal UI design. What do you think?',
    reactions: [
      { emoji: '👍', count: 3 },
      { emoji: '👎', count: 1 },
    ],
    replyCount: 5,
  },
  {
    id: '2',
    sender: 'alex',
    timestamp: '12:38',
    content: 'The keyboard shortcuts are working perfectly now',
    reactions: [{ emoji: '✅', count: 2 }],
  },
  {
    id: '3',
    sender: 'sarah',
    timestamp: '12:35',
    content: 'Can we review the search implementation today?',
    forwardedMessage: {
      from: 'dev',
      originalSender: 'timur',
      timestamp: '12:10',
      content: 'textsdfsdasdfasdfasdf',
    },
    replyCount: 2,
  },
  {
    id: '4',
    sender: 'mike',
    timestamp: '12:30',
    content: 'Here are the updated specs',
    attachment: {
      name: 'report.pdf',
      size: '2.3MB',
    },
    reactions: [{ emoji: '🔗', count: 1 }],
  },
  {
    id: '5',
    sender: 'timur',
    timestamp: '12:15',
    content: 'Remember to update your status before leaving',
  },

  {
    id: '1',
    sender: 'timur',
    timestamp: '12:41',
    content:
      'Hey team, just pushed the new terminal UI design. What do you think?',
    reactions: [
      { emoji: '👍', count: 3 },
      { emoji: '👎', count: 1 },
    ],
    replyCount: 5,
  },
  {
    id: '2',
    sender: 'alex',
    timestamp: '12:38',
    content: 'The keyboard shortcuts are working perfectly now',
    reactions: [{ emoji: '✅', count: 2 }],
  },
  {
    id: '3',
    sender: 'sarah',
    timestamp: '12:35',
    content: 'Can we review the search implementation today?',
    forwardedMessage: {
      from: 'dev',
      originalSender: 'timur',
      timestamp: '12:10',
      content: 'textsdfsdasdfasdfasdf',
    },
    replyCount: 2,
  },
  {
    id: '4',
    sender: 'mike',
    timestamp: '12:30',
    content: 'Here are the updated specs',
    attachment: {
      name: 'report.pdf',
      size: '2.3MB',
    },
    reactions: [{ emoji: '🔗', count: 1 }],
  },
  {
    id: '5',
    sender: 'timur',
    timestamp: '12:15',
    content: 'Remember to update your status before leaving',
  },
]
