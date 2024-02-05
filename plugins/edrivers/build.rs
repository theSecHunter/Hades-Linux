use libbpf_cargo::SkeletonBuilder;
use std::path::Path;

const SRC: &str = "src/bpf/hades.bpf.c";

fn main() {
    let out = Path::new("./src/bpf/hades.skel.rs");

    SkeletonBuilder::new()
        .source(SRC)
        .clang_args(
            "-c 
            -D__BPF_TRACING__ 
            -DCORE 
            -I src/bpf/headers/ 
            -I../libs/core/
            -I../libs/bpfheaders/
            -I src/bpf/ 
            -target bpf
            -O2 -g
            -march=bpf -mcpu=v2",
        )
        .debug(false)
        .build_and_generate(&out)
        .unwrap();
}
