const Technology = ({ technology }) => {
  return (
    <tr>
      <th>{technology}</th>
      <td>
        <input type="radio" name={technology} className="radio" />
      </td>
      <td>
        <input type="radio" name={technology} className="radio" />
      </td>
      <td>
        <input type="radio" name={technology} className="radio" />
      </td>
      <td>
        <input type="radio" name={technology} className="radio" />
      </td>
      <td>
        <input type="radio" name={technology} className="radio" />
      </td>
    </tr>
  );
};

export default Technology;
