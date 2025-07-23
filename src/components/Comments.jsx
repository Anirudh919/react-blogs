import React from 'react';

const dummyComments = [
  {
    id: 1,
    username: 'Alice',
    date: '2025-07-20',
    text: 'Great blog post! Really helped me understand the topic.',
  },
  {
    id: 2,
    username: 'Bob',
    date: '2025-07-21',
    text: 'Thanks for sharing this. Looking forward to more posts like this.',
  },
  {
    id: 3,
    username: 'Charlie',
    date: '2025-07-22',
    text: 'I have a question about the second paragraph — can you clarify?',
  },
];

const Comments = () => {
  return (
    <section className="max-w-3xl mx-auto  mt-8 p-4 bg-white  border-t">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      {dummyComments.length === 0 ? (
        <p className="text-gray-600">No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="space-y-4">
          {dummyComments.map(({ id, username, date, text }) => (
            <li key={id} className="border-b pb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-blue-600">{username}</span>
                <time className="text-sm text-gray-500">{date}</time>
              </div>
              <p className="text-gray-700">{text}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Comments;
