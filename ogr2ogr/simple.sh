line_tables=(
    red_vial
)
for table in ${line_tables[@]}; do
    psql -U postgres -d dbinegiv3 -c "
        ALTER TABLE $table ADD COLUMN length FLOAT;
        UPDATE $table SET length = ST_Length(wkb_geometry);
    "
done