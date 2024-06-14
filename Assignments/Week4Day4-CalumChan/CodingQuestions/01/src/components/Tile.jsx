import PropTypes from "prop-types";

function Tile({ value, clickTile }) {
  return (
    <div
      className="tile"
      onClick={() => {
        clickTile();
      }}
    >
      {value}
    </div>
  );
}

Tile.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  clickTile: PropTypes.func.isRequired,
};

export default Tile;
