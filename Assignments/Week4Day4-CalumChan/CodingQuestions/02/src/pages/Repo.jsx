import WithToggle from "../hocs/WithToggle";
import PropTypes from "prop-types";

// Assumptions: The weird ASCII art styling doesn't matter
function Repo({ data }) {
  return (
    <div>
      <div>{`+------------------------------------------------------+`}</div>
      <div>{`| <name> | <numberOfStars> | <numberOfForks> |`}</div>
      {data.map((repo) => (
        <div key={repo.name + repo.stars + repo.forks}>
          <div>{`+------------------------------------------------------+`}</div>
          {`|\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${repo.name}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${repo.stars}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${repo.forks}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0|`}
        </div>
      ))}
      <div>{`+------------------------------------------------------+`}</div>
    </div>
  );
}

Repo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      forks: PropTypes.number.isRequired,
      stars: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default WithToggle(Repo);
