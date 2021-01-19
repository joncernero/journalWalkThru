module.exports = (sequelize, DataTypes) => {
  const Journal = sequelize.define('journal', {
    title: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    entry: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner: {
      type: DataTypes.INTEGER
    }
  })
  return Journal
}
