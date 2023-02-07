const Technology = ({ technology }) => {
  return (
    <tr>
      <th>{technology}</th>
      <td>
        <input type="checkbox" name={technology} className="checkbox" />
      </td>
      <td>
        <input type="checkbox" name={technology} className="checkbox" />
      </td>
      <td>
        <input type="checkbox" name={technology} className="checkbox" />
      </td>
      <td>
        <input type="checkbox" name={technology} className="checkbox" />
      </td>
      <td>
        <input type="checkbox" name={technology} className="checkbox" />
      </td>
    </tr>
  );
};

export default Technology;
