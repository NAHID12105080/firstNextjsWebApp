const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};

const getPredictedNationality = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

async function Prediction({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const nationalityData = getPredictedNationality(params.name);
  const [age, gender, nationality] = await Promise.all([
    ageData,
    genderData,
    nationalityData,
  ]);

  return (
    <div>
      <div className="p-8">
        <div>Personal Info</div>
        <div>Age: {age?.age}</div>
        <div>Gender: {gender?.gender}</div>
        <div>Nationality: {nationality?.country[0]?.country_id}</div>
      </div>
    </div>
  );
}

export default Prediction;
