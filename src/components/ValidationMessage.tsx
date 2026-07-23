import "../styles/ValidationMessage.css";

import { platforms } from "../data/platforms";

import { useAppSelector } from "../hooks/reduxHooks";

const ValidationMessage = () => {
  const post = useAppSelector(
    (state) => state.posts.currentPost
  );

  const selectedPlatforms = useAppSelector(
    (state) => state.platforms.selectedPlatforms
  );

  return (
    <div className="validation-box">
      <h2>Validation</h2>

      {platforms
        .filter((platform) => selectedPlatforms.includes(platform.id))
        .map((platform) => (
          <div key={platform.id}>
            {post.length <= platform.limit ? (
              <p className="success">
                ✅ Valid for {platform.name}
              </p>
            ) : (
              <p className="error">
                ❌ {platform.name} limit exceeded
              </p>
            )}
          </div>
        ))}
    </div>
  );
};

export default ValidationMessage;
