import "../styles/PlatformSelector.css";

import { platforms } from "../data/platforms";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

import { togglePlatform } from "../features/platforms/platformSlice";

const PlatformSelector = () => {
  const dispatch = useAppDispatch();

  const selectedPlatforms = useAppSelector(
    (state) => state.platforms.selectedPlatforms
  );

  return (
    <div className="platform-selector">
      <h2>Select Platforms</h2>

      {platforms.map((platform) => (
        <label key={platform.id} className="platform-item">
          <input
            type="checkbox"
            checked={selectedPlatforms.includes(platform.id)}
            onChange={() => dispatch(togglePlatform(platform.id))}
          />

          {platform.name}
        </label>
      ))}
    </div>
  );
};

export default PlatformSelector;
