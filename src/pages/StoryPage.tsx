import { getStory } from '@/services/story';
import { Story } from '@/types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StoryPage = () => {
  const [story, setStory] = useState<Story | null>(null);
  const { id } = useParams();

  useEffect(() => {
    getStory(id).then((result) => setStory(result));
  }, []);

  if (!story) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-4 text-customWhite">
      <h2 className="flex flex-col items-center font-bold text-3xl">
        <span>{story.createdAt.toLocaleDateString()}</span>
        <span className="text-center">{story.location}</span>
      </h2>
      <div className="p-8 italic">
        {story.chapters.map((chapter) => (
          <>
            <p>{chapter}</p>
            <br />
          </>
        ))}
      </div>
      <div className="text-right">Unknown wanderer</div>
    </div>
  );
};

export default StoryPage;
