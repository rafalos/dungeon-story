import Container from '@/components/UI/Container';
import { getStories } from '@/services/story';
import { Stories } from '@/types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StoriesPage = () => {
  const [stories, setStories] = useState<Stories>([]);

  useEffect(() => {
    getStories().then((result) => setStories(result));
  }, []);

  if (!stories) return <h1>Loading</h1>;

  return (
    <Container title="Stories">
      <div className="flex flex-col gap-2">
        {stories
          .sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
          .map((story) => (
            <Link
              to={story.id}
              key={story.id}
              className="z-10 flex gap-4 bg-slate-50/10 p-2 text-sm text-customWhite hover:cursor-pointer hover:bg-slate-50/20 md:p-6 md:text-lg"
            >
              <span className="flex w-20 justify-center">
                {story.createdAt.toLocaleDateString('pl')}
              </span>{' '}
              <span className="flex-1">{story.location}</span>
            </Link>
          ))}
      </div>
    </Container>
  );
};

export default StoriesPage;
