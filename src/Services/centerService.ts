export const fetchCenters = async () => {
  const response = await fetch("https://raw.githubusercontent.com/YOUR_USER/YOUR_REPO/branch/data.json");
  return await response.json();
};
