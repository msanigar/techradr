import axios from 'axios';
import { useEffect, useState } from 'react';
import Technology from './Technology';

const Techs = [
  'Service mesh',
  'Dark mode interfaces',
  'Scrum',
  'Kanban',
  'Fix forward',
  'Change freezes',
  'Test plans',
  'Zero bug policy',
];

const Table = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const techradr = await axios.get('/.netlify/functions/getData');
    setData(techradr.data);
    console.log(techradr);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto w-full flex justify-center">
      from the db: {data ? <span>{data.data['tech score'].score}</span> : null}
      <form>
        <table className="table w-1/2">
          <thead>
            <tr>
              <th></th>
              <th>Meh</th>
              <th>Hold</th>
              <th>Assess</th>
              <th>Trial</th>
              <th>Adopt</th>
            </tr>
          </thead>
          <tbody>
            {Techs.map((i, k) => {
              return <Technology key={k} technology={i} />;
            })}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Meh</th>
              <th>Hold</th>
              <th>Assess</th>
              <th>Trial</th>
              <th>Adopt</th>
            </tr>
          </tfoot>
        </table>
      </form>
    </div>
  );
};

export default Table;
