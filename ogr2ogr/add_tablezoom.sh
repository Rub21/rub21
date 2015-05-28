zooms=(
    5
    6
    7
    8
    9
)
for zoom in ${zooms[@]}; do
    psql -U postgres -d dbinegiv3 -c "
        ALTER TABLE red_vial ADD COLUMN geom_$zoom geometry;
        UPDATE red_vial SET geom_$zoom = ST_Simplify(wkb_geometry, zres($zoom)) where length > zres($zoom);
    "
done