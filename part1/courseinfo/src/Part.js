
const Part = (params) => {
    const {name,exercises} = params.part;
  return (
      <p>
          {name} {exercises}
      </p>
  )
};

export default Part;