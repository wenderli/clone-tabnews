function status(request, response) {
  response.status(200).json({ status: "status 200" });
}

export default status;
