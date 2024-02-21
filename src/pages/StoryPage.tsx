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
      <h2 className="text-2xl flex justify-between">
        <span>{story.createdAt.toLocaleDateString()}</span>
        <span>{story.location}</span>
      </h2>
      <div className="w-[900px] p-4 text-justify font-poppins italic">
        {story.chapters.map((chapter) => (
          <>
            <p>{chapter}</p>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default StoryPage;
