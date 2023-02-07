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
  return (
    <div className="overflow-x-auto w-full flex justify-center">
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
