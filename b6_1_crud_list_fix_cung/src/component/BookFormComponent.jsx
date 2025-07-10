export default function BookFormComponent({
  form,
  editingId,
  handleChange,
  handleSubmit,
  resetData,
}) {
  return (
    <>
      <h1>Thong tin book</h1>
      <form onSubmit={handleSubmit}>
        Ten:
        <input
          type="text"
          name="ten"
          style={{ margin: "10px" }}
          value={form.ten}
          onChange={handleChange}
        />
        <br />
        Loai:
        <input
          type="text"
          name="loai"
          style={{ margin: "10px" }}
          value={form.loai}
          onChange={handleChange}
        />
        <br />
        Tac gia:
        <input
          type="text"
          name="tacGia"
          style={{ margin: "10px" }}
          value={form.tacGia}
          onChange={handleChange}
        />
        <br />
        Gia:
        <input
          type="text"
          name="gia"
          style={{ margin: "10px" }}
          value={form.gia}
          onChange={handleChange}
        />
        <br />
        <button type="submit">{editingId ? "Add" : "Update"}</button>
        <button type="button" onClick={resetData}>
          Reset
        </button>
      </form>
    </>
  );
}
