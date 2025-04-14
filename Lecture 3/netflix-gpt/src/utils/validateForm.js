export const validateForm = (email, password) => {
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const validPassWord =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (name.length < 3) return "Please enter a valid name";
  if (!validEmail) return "Please enter a valid email";
  if (!validPassWord) return "Please enter a valid Password";

  return null;
};
