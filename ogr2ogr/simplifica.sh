line_tables=(
    red_vial
)
for table in ${line_tables[@]}; do
    psql -U postgres -d dbinegiv2 -c "
        ALTER TABLE $table ADD COLUMN geom_z8 GEOMETRY(GEOMETRY,3857);
        UPDATE $table SET geom_z8 = ST_Simplify(wkb_geometry, zres(8))
            WHERE length > (zres(8));
    "
done