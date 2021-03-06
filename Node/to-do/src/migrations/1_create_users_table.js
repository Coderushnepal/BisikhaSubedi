//migrations ma sadhai 2ta file hunchha up and down
// Up lay table banauchha, down lay tei table hatauchha

export function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("first_name", 30).notNull(),
      table.string("last_name", 30).notNull(),
      table.string("email", 100).notNull(),
      table.string("password", 200).notNull(),
      table.boolean("is_active").notNull().defaultTo(true),
      table.timestamp("created_at").defaultTo(knex.raw("now()"));
  });
}

export function down(knex) {
  return knex.schema.dropTable("users");
}
