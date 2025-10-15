package main

import (
	"database/sql"
	"fmt"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db, err := sql.Open("mysql", "root:password@/tests")
	if err != nil {
		panic(err)
	}
	// See "Important settings" section.
	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

	if err := db.Ping(); err != nil {
		panic(err)
	}

	query := "create table foo (id bigint auto_increment primary key, bar varchar(255))"
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}

	query = "insert into foo (bar) values (?)"
	if _, err := db.Exec(query, "abc"); err != nil {
		panic(err)
	}

	query = "select * from foo"
	type foobar struct {
		id  int64
		bar string
	}
	var res foobar
	if err := db.QueryRow(query).Scan(&res.id, &res.bar); err != nil {
		panic(err)
	}

	fmt.Printf("%#+v\n", res)
}
