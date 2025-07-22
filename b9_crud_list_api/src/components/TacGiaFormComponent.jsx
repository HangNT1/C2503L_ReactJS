export default function TacGiaFormComponent({
  handleChange,
  tacGiaForm,
  isUpdate,
  handleSubmit,
  handleReset,
}) {
  return (
    <>
      <h1>Tac gia form component</h1>
      <form onSubmit={handleSubmit}>
        ID:
        <input
          type="text"
          name="id"
          style={{ margin: "10px" }}
          value={tacGiaForm.id}
          onChange={handleChange}
        />
        <br />
        Tên:
        <input
          type="text"
          name="ten"
          style={{ margin: "10px" }}
          value={tacGiaForm.ten}
          onChange={handleChange}
        />
        <br />
        Loại:
        <input
          type="text"
          name="loai"
          style={{ margin: "10px" }}
          value={tacGiaForm.loai}
          onChange={handleChange}
        />
        <br />
        Giá:
        <input
          type="text"
          name="gia"
          style={{ margin: "10px" }}
          value={tacGiaForm.gia}
          onChange={handleChange}
        />
        <br />
        <button type="submit" tyle={{ margin: "10px" }}>
          {isUpdate ? "Update" : "Add"}
        </button>
        <button type="button" onClick={handleReset} style={{ margin: "10px" }}>
          Reset
        </button>
      </form>
    </>
  );
}
