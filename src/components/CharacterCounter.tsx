import "../styles/CharacterCounter.css";

import { platforms } from "../data/platforms";

import { useAppSelector } from "../hooks/reduxHooks";

const CharacterCounter = () => {
  const post = useAppSelector(
    (state) => state.posts.currentPost
  );

  const selectedPlatforms = useAppSelector(
    (state) => state.platforms.selectedPlatforms
  );

  return (
    <div className="character-counter">
      <h2>Character Count</h2>

      {platforms
        .filter((platform) => selectedPlatforms.includes(platform.id))
        .map((platform) => (
          <div key={platform.id} className="counter-item">
            <span>{platform.name}</span>

            <span>
              {post.length} / {platform.limit}
            </span>
          </div>
        ))}
    </div>
  );
};

export default CharacterCounter;
