const db = require('../config/database');

class Residence {
  static async getAll() {
    try {
      const [rows] = await db.query('SELECT * FROM residences');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const [rows] = await db.query('SELECT * FROM residences WHERE id = ?', [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async create(residence) {
    try {
      const [result] = await db.query(
        'INSERT INTO residences (name, address, image, status) VALUES (?, ?, ?, ?)',
        [residence.name, residence.address, residence.image, residence.status]
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, residence) {
    try {
      const [result] = await db.query(
        'UPDATE residences SET name = ?, address = ?, image = ?, status = ? WHERE id = ?',
        [residence.name, residence.address, residence.image, residence.status, id]
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const [result] = await db.query('DELETE FROM residences WHERE id = ?', [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Residence; 